'use client'

export default function Button ({name}) {
  function stopPropagating(e) {
    e.preventDefault()
    e.stopPropagation();
  }

  return (
    <button
      type="button"
      className="border rounded-lg p-2 w-full mt-2 hover:text-orange-400 hover:font-bold hover:bg-blue-950 transition-all"
      onClick={ (e) => {
        if (name == "Add to Cart") {
          stopPropagating(e)
        }
      }
      }
    >
      {name}
    </button>
  )
}
