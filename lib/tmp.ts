import * as edgedb from "edgedb";

const client = edgedb.createClient();

const run = async () => {
  const query = e.select(e.Account, (account) => ({
    id: true,
  }));

  const result = await query.run(client);

  console.log(result);
};

run();
