CREATE MIGRATION m1mbog3da425yclt4f3c32o7pp6zalhnufpejh2zq4xvozevtaer6q
    ONTO m1e2fucbowjddd3qchbxy3sgzgkuxlzu7trbe7angmhavwn72pa3ja
{
  ALTER TYPE default::User {
      DROP PROPERTY role;
  };
  DROP SCALAR TYPE default::Role;
};
