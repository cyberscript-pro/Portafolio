import { PolarAngleAxis, PolarGrid, PolarRadiusAxis, Radar, RadarChart, ResponsiveContainer } from 'recharts';

const data = [
  {skill: 'Frontend', level: 75},
  {skill: 'Backend', level: 90},
  {skill: 'Bases de Datos', level: 70},
  {skill: 'DevOps', level: 50},
]

function RadarSkills() {
  return (
    <div className='w-full h-96'>
      <ResponsiveContainer width='100%' height='100%'>
        <RadarChart cx='50%' cy='50%' outerRadius='80%' data={data}>
          <PolarGrid />
          <PolarAngleAxis dataKey='skill'/>
          <PolarRadiusAxis angle={30} domain={[0, 100]}/>
          <Radar name='Skill Level' dataKey='level' stroke='#8884d8' fill='#8884d8' fillOpacity={0.6}/>
        </RadarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default RadarSkills