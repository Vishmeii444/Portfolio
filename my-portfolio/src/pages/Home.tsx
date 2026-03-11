import Grainient from '../components/bits/Grainient';

const Home = () => {
  return (
    <div className="relative w-full h-screen">
      {/* Background */}
      <Grainient 
        color1="#1E3226" // Forest
        color2="#76290B" // Rust
        color3="#CCB363" // Gold
        timeSpeed={0.2}
        grainAmount={0.05}
      />
      
      {/* Your Page Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-cream">
        <h1 className="text-8xl font-black italic tracking-tighter">PORTFOLIO</h1>
      </div>
    </div>
  )
}

export default Home;