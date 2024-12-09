export default defineEventHandler(async () => {
  const { airTableKey } = useRuntimeConfig();
  const uri =
    "https://api.airtable.com/v0/appK13ISOZy5bznU1/tblQYAwgASHHYQ0MJ?pageSize=3";

  const { records } = await $fetch(uri, {
    headers: {
      Authorization: `Bearer ${airTableKey}`,
    },
  });

  return records;
});
