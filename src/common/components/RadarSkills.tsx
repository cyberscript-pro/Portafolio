import { PolarAngleAxis, PolarGrid, PolarRadiusAxis, Radar, RadarChart, ResponsiveContainer } from 'recharts';

const data = [
  {skill: 'React', level: 75},
  {skill: 'TS', level: 90},
  {skill: 'Java', level: 70},
  {skill: 'Docker', level: 50},
  {skill: 'Git', level: 70},
  {skill: 'Node', level: 95},
  {skill: 'Prisma', level: 80},
  {skill: 'Express', level: 40},
  {skill: 'Next.js', level: 90},
  {skill: 'TailwindCSS', level: 80},
]

function RadarSkills() {
  return (
    <div className='w-full h-96'>
      <ResponsiveContainer width='100%' height='100%'>
        <RadarChart cx='50%' cy='50%' outerRadius='80%' data={data}>
          <PolarGrid />
          <PolarAngleAxis dataKey='skill' tick={{fontSize: 10}} />
          <PolarRadiusAxis angle={50} domain={[0, 100]}/>
          <Radar name='Skill Level' dataKey='level' stroke='#8884d8' fill='#8884d8' fillOpacity={0.6}/>
        </RadarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default RadarSkills