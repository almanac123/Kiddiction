import { BarChart, Bar, CartesianGrid, XAxis, YAxis } from 'recharts';
function Parents(){
    const data = [
        {name: 'Learn', students: 5},
        {name: 'Play', students: 3}
        // {name: 'Geek-i-knack', students: 200},
        // {name: 'Geek-o-mania', students: 1000}
      ];
    return(
        <>
        <div className="flex justify-evenly pt-28 hell">
            <img src="https://clueylearning.com.au/wp-content/uploads/2019/08/parent-child-using-MySchool-website.jpg" alt="hel"/> 
            <div className="pt-12">
            <h1 className="text-6xl text-center pb-4 tracking-wider">Lets find </h1>
            <h1 className="text-6xl text-center pb-4 tracking-wider"> Parenting Guide </h1>
            <h1 className="text-6xl text-center pb-4 tracking-wider">and</h1>
            <h1 className="text-6xl text-center tracking-wider">Child Statistics</h1>
        </div>
        </div>
        <div className='pt-14'>
          <ul>
            <li className='text-center text-2xl tracking-wider pb-4 md:pl-72 md:pr-72'>Communicate often and openly. Listen attentively. Encourage your kids to talk about their experiences and emotions.</li>
            <li className='text-center text-2xl tracking-wider pb-4 md:pl-72 md:pr-72'>Demonstrate empathy and trust.</li>
            <li className='text-center text-2xl tracking-wider pb-4 md:pl-72 md:pr-72'>Knowing how to be a good parent is intuitive. Trust and follow your instinct. Gage and act according to your child’s display of maturity.</li>
             <li className='text-center text-2xl tracking-wider pb-4 md:pl-72 md:pr-72'>While the younger child is more self-centered and less understanding of other’s expectations, the teenager is more attuned to compromise, negotiation, and developing their independence and identity.</li>
             <li className='text-center text-2xl tracking-wider pb-4 md:pl-72 md:pr-72'>Most of all, enjoy your children at whatever age they are. It is a time of learning and sharing, reaching new heights together. Be there while they grow.</li>
          </ul>
        </div>
        <div>
          <h1 className='text-center pb-6 text-6xl pt-6'>YOUR CHILD STATISTICS</h1>
          </div>

        <div className="flex justify-center">
        <BarChart width={600} height={600} data={data}>
    <Bar dataKey="students" fill="green" />
    <CartesianGrid stroke="#ccc" />
    <XAxis dataKey="name" />
    <YAxis />
  </BarChart>
  </div>
  </>

    )
}
export default Parents;