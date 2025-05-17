import { useParams } from "react-router"
import FilterModule from "./FilterModule"

const CategoriesWiseRecipes = () => {
    const { CategoriesName  } = useParams()
  return (
    <section className="categoryFood h-fit m-auto md:max-w-[75vw] w-[97vw]">
      <div className="filterModule">
        <FilterModule />
      </div>
    </section>
  )
}

export default CategoriesWiseRecipes