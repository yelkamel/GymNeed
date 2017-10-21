import  {MATCH_STATUS} from '../Constant/BCH_STATUS'

export function matchStatusToColor (value) {
    switch (value) {
        case MATCH_STATUS.INPROGRESS:
            return '#C3F86E'
            break;
        case MATCH_STATUS.HALF_TIME:
            return '#F5A623'
            break;
        case MATCH_STATUS.INPROGRESS:
            return '#FF3200'
            break;
        case MATCH_STATUS.FINAL:
            return '#FF3200'
            break;
        default:
            return '#9B9B9B'
            break;
    }
}