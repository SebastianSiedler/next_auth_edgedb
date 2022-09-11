import type { Adapter, AdapterSession, AdapterUser } from "next-auth/adapters";
import { Client } from "edgedb";
import e from "./edgeql-js";
export type E = typeof e;

type KeyValuePair = {
  [key: string]: any;
};

export function EdgeDbAdapter(client: Client, e: E): Adapter {
  const getUserByIdQuery = (id: string) => {
    return e.select(e.User, (u) => ({
      ...e.User["*"],
      filter: e.op(u.id, "=", e.uuid(id)),
    }));
  };

  return {
    createUser: async (user) => {
      const { name, email, emailVerified, image } = user as KeyValuePair;

      const insertUser = e.insert(e.User, {
        name: e.str(name ?? ""),
        email: e.str(email ?? ""),
        emailVerified: emailVerified ? e.datetime(emailVerified) : null,
        image: e.str(image ?? ""),
      });

      const result = await insertUser.run(client);

      const userRes = await getUserByIdQuery(result.id).run(client);

      if (userRes === null) {
        throw "User not found!";
      }

      return { ...userRes };
    },

    getUser: async (id) => {
      return getUserByIdQuery(id).run(client);
    },

    getUserByEmail: async (email) => {
      const query = e.select(e.User, (user) => ({
        ...e.User["*"],
        filter: e.op(user.email, "=", e.str(email)),
      }));

      return await query.run(client);
    },

    getUserByAccount: async ({ providerAccountId, provider }) => {
      const acc = await e
        .select(e.Account.assert_single(), (a) => ({
          user: {
            ...e.User["*"],
          },
          filter: e.op(
            e.op(a.provider, "=", provider),
            "and",
            e.op(a.providerAccountId, "=", providerAccountId)
          ),
        }))
        .run(client);

      if (!acc || !acc.user) {
        return null;
      }

      return acc.user;
    },

    updateUser: async (data) => {
      const { id } = data;

      if (!id || !data) {
        throw new Error("Can't update user without id");
      }

      const asdf = { ...data };

      const updateUserQuery = e
        .update(e.User, (u) => ({
          filter: e.op(u.id, "=", e.uuid(id)),
          set: {
            ...asdf,
            email: "",
            emailVerified: new Date(),
            name: asdf.name ?? "",
          },
        }))
        .run(client);

      const user = await getUserByIdQuery(id).run(client);

      if (updateUserQuery === null || user === null) {
        throw new Error("User not found");
      }
      return { ...user };
    },

    getSessionAndUser: async (sessionToken) => {
      const session = await e
        .select(e.Session.assert_single(), (s) => ({
          ...e.Session["*"],
          user: {
            id: true,
          },
          filter: e.op(s.sessionToken, "=", sessionToken),
        }))
        .run(client);

      if (
        !session ||
        !session.id ||
        !session.expires ||
        !session.user?.id ||
        !session.sessionToken
      ) {
        return null;
      }

      if (session.sessionToken === null) return null;
      if (session.expires === null) return null;

      const user = await getUserByIdQuery(session.user?.id).run(client);

      if (!user) {
        return null;
      }

      const tmp = {
        id: session.id,
        sessionToken: session.sessionToken,
        expires: session.expires,
        userId: user.id,
      } as AdapterSession;

      return {
        user: user,
        session: tmp,
      };
    },

    deleteUser: async (userId) => {},

    linkAccount: async (account) => {},

    unlinkAccount: async (providerAccountId) => {},

    deleteSession: async (sessionToken) => {},

    createSession: async (session) => {
      // TODO: ...
      const { sessionToken, userId, expires } = session;

      return {
        expires,
        sessionToken,
        userId,
        id: "-1",
      };
    },

    updateSession: async (session) => {
      return null;
    },
  };
}

/**
 *
 *
 * https://github.com/cory-evans/next-auth-adapter-edgedb/blob/f350f868f5e9e838e8d3a4ecf4ece557c27b5813/src/index.ts
 * https://github.com/kalebdueck/kollection/blob/ffcdc47d6fd82c641275a3bcb5e16455510b960d/lib/EdgeDbAdapter.ts
 *
 *
 * https://github.com/nextauthjs/next-auth/blob/main/packages/adapter-prisma/src/index.ts
 */
