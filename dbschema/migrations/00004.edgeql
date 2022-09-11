CREATE MIGRATION m1e2fucbowjddd3qchbxy3sgzgkuxlzu7trbe7angmhavwn72pa3ja
    ONTO m1d7savkm4g6qzygoduvewj4vmxeg5lyrclfbwzjszajjyotdwvr4a
{
  ALTER TYPE default::User {
      ALTER PROPERTY email {
          RESET OPTIONALITY;
      };
  };
  ALTER TYPE default::User {
      ALTER PROPERTY name {
          RESET OPTIONALITY;
      };
  };
};
