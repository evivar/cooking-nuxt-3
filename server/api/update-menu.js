export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const { records } = body;
  const { airTableKey } = useRuntimeConfig();

  const data = {
    performUpsert: {
      recordsToMergeOn: ["id"],
    },
    records: records,
  };

  const uri = `https://api.airtable.com/v0/appK13ISOZy5bznU1/tblVtMlqTf5B1REPb`;

  const updatedRecords = await $fetch(uri, {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${airTableKey}`,
      "Content-Type": "application/json",
    },
    body: {
      records: records,
    },
  });

  return updatedRecords;
});
