import { container, sprinkles } from 'vanilla-extract-tailwindcss'

function App() {
  return (
    <div>
      <div
        className={`${sprinkles({
          backgroundImage: 'toT',
          bgGradientFrom: 'amber600',
          bgGradientVia: 'green500',
          h: 96,
        })}`}
      />
    </div>
  )
}

export default App
