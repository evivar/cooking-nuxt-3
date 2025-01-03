export default defineEventHandler(async () => {
    const { airTableKey } = useRuntimeConfig();
    const uri =
      "https://api.airtable.com/v0/appK13ISOZy5bznU1/tblVtMlqTf5B1REPb?sort%5B0%5D%5Bfield%5D=id&sort%5B0%5D%5Bdirection%5D=asc";
  
    const { records } = await $fetch(uri, {
      headers: {
        Authorization: `Bearer ${airTableKey}`,
      },
    });
  
    const weeklyMenu = [];

    return records;
  });
  