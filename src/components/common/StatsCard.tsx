interface StatsCardProps{
    statTitle: string;
    statValue: string;
}

function StatsCard({ statTitle, statValue }: StatsCardProps){
    return(
        <article className='bg-gray-100 p-5 rounded-xl border border-gray-300 w-full'>
            <p>
                Total {statTitle}
            </p>
            <h3 className='font-bold text-2xl'>
                {statValue}
            </h3>
        </article>
    )
}

export default StatsCard;