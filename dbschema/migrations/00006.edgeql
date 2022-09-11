CREATE MIGRATION m1bemva2g4jcts4tkhh7muktp4u2gb2fios4jgskpwfcz7hmembula
    ONTO m1mbog3da425yclt4f3c32o7pp6zalhnufpejh2zq4xvozevtaer6q
{
  CREATE SCALAR TYPE default::Role EXTENDING enum<USER, ADMIN>;
  ALTER TYPE default::User {
      CREATE PROPERTY role -> default::Role {
          SET default := 'USER';
      };
  };
};
