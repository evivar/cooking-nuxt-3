export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const { fields } = body;
  const { airTableKey } = useRuntimeConfig();

  const { itemId } = event.context.params;

  const uri = `https://api.airtable.com/v0/appK13ISOZy5bznU1/tblMIs2AMHxiMOOPn/${itemId}`;

  const updatedRecords = await $fetch(uri, {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${airTableKey}`,
    },
    body: {
      fields: fields,
    },
  });

  return updatedRecords;
});
