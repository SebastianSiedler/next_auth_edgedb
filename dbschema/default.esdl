module default {
    scalar type Role extending enum<USER, ADMIN>;

    type Account{
        required property type -> str;
        required property provider -> str{
            constraint exclusive;
        };
        required property providerAccountId -> str{
            constraint exclusive;
        };

        property refresh_token -> str;
        property refresh_token_expires_in -> int64;
        property access_token -> str;
        property expires_at -> int64;
        property token_type -> str;
        property scope -> str;
        property id_token -> str;
        property session_state -> str;
        property oauth_token_secret -> str;
        property oauth_token -> str;

        link user -> User;
        
    }

    type Session {
        required property sessionToken -> str {
            constraint exclusive;
        };
        required property expires -> datetime;

        link user -> User;
    }

    type User {
        property name -> str;
        property email -> str {
            constraint exclusive;
        };
        property emailVerified -> datetime;
        property image -> str;
        # each account could only be assigned to one user
        multi link accounts -> Account{
            constraint exclusive;
            on target delete allow;
			on source delete delete target
        };
		multi link sessions -> Session {
			constraint exclusive;
			on target delete allow;
			on source delete delete target
		}
        property role -> Role {
           default := 'USER';
        };
    }
}