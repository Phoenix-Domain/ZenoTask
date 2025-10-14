interface StatsCardProps{
    statTitle: string;
    statValue?: string;
}

function StatsCard({ statTitle, statValue }: StatsCardProps){
    return(
        <article>
            <p>
                Total {statTitle}
            </p>
            <h3>
                {statValue}
            </h3>
        </article>
    )
}

export default StatsCard;