import { NextAuthOptions } from "next-auth";
import { EdgeDbAdapter } from "../adapter/EdgeDbAdapter";
import e from "../dbschema/edgeql-js";
import * as edgedb from "edgedb";
import Auth0Provider from "next-auth/providers/auth0";

const client = edgedb.createClient();

export const authOptions: NextAuthOptions = {
  adapter: EdgeDbAdapter(client, e),
  providers: [
    Auth0Provider({
      clientId: "serverEnv.AUTH0_CLIENT_ID",
      clientSecret: "serverEnv.AUTH0_CLIENT_SECRET",
      issuer: "serverEnv.AUTH0_ISSUER",
    }),
  ],
};
