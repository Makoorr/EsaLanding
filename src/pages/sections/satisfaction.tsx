import { PercentageIndicator } from "../../components/percentage-indicator";

export function Satisfaction() {
    return (
        <div className="py-10">
            <PercentageIndicator percentage={98}
                text1="EsaLink est fière de partager la satisfaction de ses alternants, avec un taux de 98%"
                text2="Based on customer feedback and satisfaction surveys"
            />
        </div>
    )
}