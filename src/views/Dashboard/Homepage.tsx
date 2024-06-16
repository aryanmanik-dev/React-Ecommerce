import Chart from './Chart';
import PieChart from './PieChart';
const Homepage = () => {
  return (
    <div className="h-auto p-10 mt-10">
    <div>
      <h1 className="text-2xl text-center">Dashboard View</h1>
    </div>
    
    <div className="flex flex-wrap md:flex-nowrap gap-5 p-10">
      <div className="flex flex-col md:flex-row w-full p-10 shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]">
        <div className="w-full md:w-1/2 min-h-[300px] max-h-[300px]">
          <Chart />
        </div>
        <div className="w-full md:w-1/2 min-h-[300px] max-h-[300px] flex justify-center">
          <PieChart />
        </div>
      </div>
    </div>
    
    <div className="flex flex-wrap md:flex-nowrap gap-5 p-10">
      {Array.from({ length: 6 }).map((_, index) => (
        <div key={index} className="w-full md:w-1/6 h-[200px] shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]"></div>
      ))}
    </div>
    
    <div className="flex flex-wrap md:flex-nowrap gap-5 p-10">
      {Array.from({ length: 6 }).map((_, index) => (
        <div key={index} className="w-full md:w-1/6 h-[200px] shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]"></div>
      ))}
    </div>
  </div>
  
  );
};


export default Homepage;
