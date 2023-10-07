const VITE_BASE_URL = import.meta.env.VITE_BASE_URL;

export async function fetchGithubUsers(query: any) {
  try {
    const response = await fetch(`${VITE_BASE_URL}${query}`);

    if (!response.ok) {
      throw new Error("Error al buscar usuarios de GitHub");
    }

    const data = await response.json();

    return data.items;
  } catch (error: any) {
    throw new Error(error.message);
  }
}
