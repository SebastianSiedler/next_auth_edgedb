import { $ } from "edgedb";
import * as _ from "../imports";
import type * as _std from "./std";
export type $AccountλShape = $.typeutil.flatten<_std.$Object_188bed8e150911eda3afcf443ef691deλShape & {
  "access_token": $.PropertyDesc<_std.$str, $.Cardinality.AtMostOne, false, false, false, false>;
  "expires_at": $.PropertyDesc<_std.$int64, $.Cardinality.AtMostOne, false, false, false, false>;
  "id_token": $.PropertyDesc<_std.$str, $.Cardinality.AtMostOne, false, false, false, false>;
  "oauth_token": $.PropertyDesc<_std.$str, $.Cardinality.AtMostOne, false, false, false, false>;
  "oauth_token_secret": $.PropertyDesc<_std.$str, $.Cardinality.AtMostOne, false, false, false, false>;
  "provider": $.PropertyDesc<_std.$str, $.Cardinality.One, true, false, false, false>;
  "providerAccountId": $.PropertyDesc<_std.$str, $.Cardinality.One, true, false, false, false>;
  "refresh_token": $.PropertyDesc<_std.$str, $.Cardinality.AtMostOne, false, false, false, false>;
  "refresh_token_expires_in": $.PropertyDesc<_std.$int64, $.Cardinality.AtMostOne, false, false, false, false>;
  "scope": $.PropertyDesc<_std.$str, $.Cardinality.AtMostOne, false, false, false, false>;
  "session_state": $.PropertyDesc<_std.$str, $.Cardinality.AtMostOne, false, false, false, false>;
  "token_type": $.PropertyDesc<_std.$str, $.Cardinality.AtMostOne, false, false, false, false>;
  "type": $.PropertyDesc<_std.$str, $.Cardinality.One, false, false, false, false>;
  "user": $.LinkDesc<$User, $.Cardinality.AtMostOne, {}, false, false,  false, false>;
  "<accounts[is User]": $.LinkDesc<$User, $.Cardinality.AtMostOne, {}, false, false,  false, false>;
  "<accounts": $.LinkDesc<$.ObjectType, $.Cardinality.Many, {}, false, false,  false, false>;
}>;
type $Account = $.ObjectType<"default::Account", $AccountλShape, null>;
const $Account = $.makeType<$Account>(_.spec, "a3a034d3-2c33-11ed-ad9c-b38d8b5b1e1e", _.syntax.literal);

const Account: $.$expr_PathNode<$.TypeSet<$Account, $.Cardinality.Many>, null, true> = _.syntax.$PathNode($.$toSet($Account, $.Cardinality.Many), null, true);

export type $SessionλShape = $.typeutil.flatten<_std.$Object_188bed8e150911eda3afcf443ef691deλShape & {
  "user": $.LinkDesc<$User, $.Cardinality.AtMostOne, {}, false, false,  false, false>;
  "expires": $.PropertyDesc<_std.$datetime, $.Cardinality.One, false, false, false, false>;
  "sessionToken": $.PropertyDesc<_std.$str, $.Cardinality.One, true, false, false, false>;
  "<sessions[is User]": $.LinkDesc<$User, $.Cardinality.AtMostOne, {}, false, false,  false, false>;
  "<sessions": $.LinkDesc<$.ObjectType, $.Cardinality.Many, {}, false, false,  false, false>;
}>;
type $Session = $.ObjectType<"default::Session", $SessionλShape, null>;
const $Session = $.makeType<$Session>(_.spec, "a3b20198-2c33-11ed-a415-89e9b897ee8c", _.syntax.literal);

const Session: $.$expr_PathNode<$.TypeSet<$Session, $.Cardinality.Many>, null, true> = _.syntax.$PathNode($.$toSet($Session, $.Cardinality.Many), null, true);

export type $UserλShape = $.typeutil.flatten<_std.$Object_188bed8e150911eda3afcf443ef691deλShape & {
  "emailVerified": $.PropertyDesc<_std.$datetime, $.Cardinality.AtMostOne, false, false, false, false>;
  "image": $.PropertyDesc<_std.$str, $.Cardinality.AtMostOne, false, false, false, false>;
  "accounts": $.LinkDesc<$Account, $.Cardinality.Many, {}, true, false,  false, false>;
  "sessions": $.LinkDesc<$Session, $.Cardinality.Many, {}, true, false,  false, false>;
  "email": $.PropertyDesc<_std.$str, $.Cardinality.AtMostOne, true, false, false, false>;
  "name": $.PropertyDesc<_std.$str, $.Cardinality.AtMostOne, false, false, false, false>;
  "<user[is Account]": $.LinkDesc<$Account, $.Cardinality.Many, {}, false, false,  false, false>;
  "<user[is Session]": $.LinkDesc<$Session, $.Cardinality.Many, {}, false, false,  false, false>;
  "<user": $.LinkDesc<$.ObjectType, $.Cardinality.Many, {}, false, false,  false, false>;
}>;
type $User = $.ObjectType<"default::User", $UserλShape, null>;
const $User = $.makeType<$User>(_.spec, "a3aa2d1e-2c33-11ed-80ee-7d25d71a0840", _.syntax.literal);

const User: $.$expr_PathNode<$.TypeSet<$User, $.Cardinality.Many>, null, true> = _.syntax.$PathNode($.$toSet($User, $.Cardinality.Many), null, true);



export { $Account, Account, $Session, Session, $User, User };

type __defaultExports = {
  "Account": typeof Account;
  "Session": typeof Session;
  "User": typeof User
};
const __defaultExports: __defaultExports = {
  "Account": Account,
  "Session": Session,
  "User": User
};
export default __defaultExports;
