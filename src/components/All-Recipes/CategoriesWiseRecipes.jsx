import { useParams } from "react-router"

const CategoriesWiseRecipes = () => {
    const { CategoriesName  } = useParams()
  return (
    <div>{CategoriesName}</div>
  )
}

export default CategoriesWiseRecipes