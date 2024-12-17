export default defineEventHandler(async () => {
  const { airTableKey } = useRuntimeConfig();

  const uri =
    "https://api.airtable.com/v0/appK13ISOZy5bznU1/tblMIs2AMHxiMOOPn?pageSize=100&sort%5B0%5D%5Bfield%5D=purchased&sort%5B0%5D%5Bdirection%5D=asc";

  const { records } = await $fetch(uri, {
    headers: {
      Authorization: `Bearer ${airTableKey}`,
    },
  });
  records.forEach((record) => {
    record.fields.purchased = record.fields.purchased
      ? record.fields.purchased
      : false;
  });

  return records;
});
