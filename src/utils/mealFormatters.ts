
export const extractIngredients = (meal: Record<string, undefined | string>): string[] => {
  const ingredients: string[] = [];
  
  for (let i = 1; i <= 20; i++) {
    const ingredient = meal[`strIngredient${i}`];
    const measure = meal[`strMeasure${i}`];
    

    if (ingredient && typeof ingredient === 'string' && ingredient.trim() !== "") {
      const formattedMeasure = measure && measure.trim() !== "" ? `${measure} ` : "";
      ingredients.push(`${formattedMeasure}${ingredient}`);
    }
  }
  
  return ingredients;
};

export const getYouTubeEmbedUrl = (url: string | null | undefined): string | null => {
  if (!url) return null;
  
  const videoIdParts = url.split("v=");
  if (videoIdParts.length < 2) return null; 
  
  const videoId = videoIdParts[1];
  const ampersandPosition = videoId.indexOf("&");
  
  if (ampersandPosition !== -1) {
    return `https://www.youtube.com/embed/${videoId.substring(0, ampersandPosition)}`;
  }
  
  return `https://www.youtube.com/embed/${videoId}`;
};