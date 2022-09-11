CREATE MIGRATION m1d7savkm4g6qzygoduvewj4vmxeg5lyrclfbwzjszajjyotdwvr4a
    ONTO m14m3d4sdceb4ltuuz5p724t4hyvaqocp77a43y3adobznrjls5hbq
{
  ALTER TYPE default::User {
      ALTER LINK accounts {
          ON SOURCE DELETE DELETE TARGET;
          ON TARGET DELETE ALLOW;
          CREATE CONSTRAINT std::exclusive;
      };
      ALTER LINK sessions {
          ON SOURCE DELETE DELETE TARGET;
          ON TARGET DELETE ALLOW;
          CREATE CONSTRAINT std::exclusive;
      };
  };
};
