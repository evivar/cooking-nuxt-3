export default defineEventHandler(async () => {
  const { airTableKey } = useRuntimeConfig();
  const uri =
    "https://api.airtable.com/v0/appK13ISOZy5bznU1/tblQYAwgASHHYQ0MJ?sort%5B0%5D%5Bfield%5D=created&sort%5B0%5D%5Bdirection%5D=desc";

  const { records } = await $fetch(uri, {
    headers: {
      Authorization: `Bearer ${airTableKey}`,
    },
  });

  const recipes = [];

  records.forEach((record) => {
    const recipe = {
      id: record.id,
      title: record.fields.title,
      ingredients: record.fields.ingredients.split(","),
      steps: record.fields.steps.split("\n"),
      image: record.fields.image ? record.fields.image : null,
      date: record.fields.created
    };
    recipes.push(recipe);
  });

  return recipes;
});
