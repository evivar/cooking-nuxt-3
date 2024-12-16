export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const { fields } = body;
  const { airTableKey } = useRuntimeConfig();

  const uri = `https://api.airtable.com/v0/appK13ISOZy5bznU1/tblQYAwgASHHYQ0MJ`;

  const updatedRecords = await $fetch(uri, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${airTableKey}`,
    },
    body: {
      fields: fields,
    },
  });

  return updatedRecords;
});
