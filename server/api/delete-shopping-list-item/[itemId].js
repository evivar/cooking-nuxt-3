export default defineEventHandler(async (event) => {
    const { itemId } = event.context.params;

    const { airTableKey } = useRuntimeConfig();

    const uri = `https://api.airtable.com/v0/appK13ISOZy5bznU1/tblMIs2AMHxiMOOPn/${itemId}`;
  
    const deletedRecords = await $fetch(uri, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${airTableKey}`,
      },
    });
    console.log('deletedRecords :>> ', deletedRecords);
  
    return deletedRecords;
  });
  