CREATE MIGRATION m13j6q4v36x7x5vj2fsp6rmngohyo5xdod2anyxlsorjhgsqyu2hmq
    ONTO initial
{
  CREATE TYPE default::Account {
      CREATE PROPERTY access_token -> std::str;
      CREATE PROPERTY expires_at -> std::int64;
      CREATE PROPERTY id_token -> std::str;
      CREATE PROPERTY oauth_token -> std::str;
      CREATE PROPERTY oauth_token_secret -> std::str;
      CREATE REQUIRED PROPERTY provider -> std::str {
          CREATE CONSTRAINT std::exclusive;
      };
      CREATE REQUIRED PROPERTY providerAccountId -> std::str {
          CREATE CONSTRAINT std::exclusive;
      };
      CREATE PROPERTY refresh_token -> std::str;
      CREATE PROPERTY refresh_token_expires_in -> std::int64;
      CREATE PROPERTY scope -> std::str;
      CREATE PROPERTY session_state -> std::str;
      CREATE PROPERTY token_type -> std::str;
      CREATE REQUIRED PROPERTY type -> std::str;
  };
  CREATE TYPE default::User {
      CREATE MULTI LINK accounts -> default::Account;
      CREATE REQUIRED PROPERTY email -> std::str {
          CREATE CONSTRAINT std::exclusive;
      };
      CREATE PROPERTY emailVerified -> std::datetime;
      CREATE PROPERTY image -> std::str;
      CREATE REQUIRED PROPERTY name -> std::str;
  };
  ALTER TYPE default::Account {
      CREATE LINK user -> default::User;
  };
  CREATE TYPE default::Session {
      CREATE LINK user -> default::User;
      CREATE REQUIRED PROPERTY expires -> std::datetime;
      CREATE REQUIRED PROPERTY sessionToken -> std::str {
          CREATE CONSTRAINT std::exclusive;
      };
  };
  ALTER TYPE default::User {
      CREATE MULTI LINK sessions -> default::Session;
  };
};
