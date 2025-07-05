import { experiences } from "@/src/common/services/utils";

function Experience() {
  return (
    <section className=" flex flex-col   divide-y divide-slate-200">
      <div className="w-full max-w-3xl mx-auto md:pb-20 md:pt-20 ">
        <div className="-my-6">
          {experiences.map((data, idx) => (
            <div key={idx} className=" relative py-6 pl-8 sm:pl-32 group">
              <h3 className="mb-1 text-2xl font-bold sm:mb-0">
                {data.position}
              </h3>
              <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-zinc-700 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-3 after:h-3 after:bg-blue-600 after:box-content after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                <time className="sm:absolute left-0 translate-y-0.5 inline-flex  items-center justify-center text-xs font-semibold uppercase w-fit px-2 h-6 mb-3 sm:mb-0 text-emerald-600 bg-emerald-100 rounded-full">
                  {data.date}
                </time>
                {/* <p className="text-xl font-bold  text-gray-400 ">{data.subtitle}</p> */}
              </div>
              {/* <p className="text-slate-400  max-w-xl">{data.description}</p> */}
              <ul className="list-disc list-inside text-sm text-gray-700 dark:text-gray-300">
                {data.responsibilities.map((res, j) => (
                  <li key={j}>{res}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
