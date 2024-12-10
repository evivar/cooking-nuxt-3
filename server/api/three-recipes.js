export default defineEventHandler(async () => {
  const uri =
    "https://api.airtable.com/v0/appK13ISOZy5bznU1/tblQYAwgASHHYQ0MJ?pageSize=3";

  const { records } = await $fetch(uri, {
    headers: {
      Authorization: `Bearer patSKEJ2MuF2wGV7j.ae9b22073a058e6f0e61bb09cef9032aa6061d9d2b5fc3250420bb0625b79b92`,
    },
  });

  return records;
});
