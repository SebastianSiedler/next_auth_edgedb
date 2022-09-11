CREATE MIGRATION m14m3d4sdceb4ltuuz5p724t4hyvaqocp77a43y3adobznrjls5hbq
    ONTO m13j6q4v36x7x5vj2fsp6rmngohyo5xdod2anyxlsorjhgsqyu2hmq
{
  CREATE SCALAR TYPE default::Role EXTENDING enum<USER, ADMIN>;
  ALTER TYPE default::User {
      CREATE PROPERTY role -> default::Role {
          SET default := 'USER';
      };
  };
};
