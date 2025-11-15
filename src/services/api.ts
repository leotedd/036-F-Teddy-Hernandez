const BASE_URL = "https://www.thecocktaildb.com/api/json/v1/1";

export async function getOrdinaryDrinks() {
  const res = await fetch(`${BASE_URL}/filter.php?c=Ordinary_Drink`);
  const json = await res.json();
  return json.drinks;
}

export async function getDrinkDetail(id: string) {
  const res = await fetch(`${BASE_URL}/lookup.php?i=${id}`);
  const json = await res.json();
  return json.drinks[0];
}
