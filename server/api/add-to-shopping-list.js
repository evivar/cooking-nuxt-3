export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const { item } = body;

  const { airTableKey } = useRuntimeConfig();

  const uri = "https://api.airtable.com/v0/appK13ISOZy5bznU1/tblMIs2AMHxiMOOPn";

  const records = await $fetch(uri, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${airTableKey}`,
    },
    body: {
      fields: item,
    },
  });

  records.fields.purchased = false;

  return records;
});
