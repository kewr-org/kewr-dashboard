import Card from '@material-tailwind/react/Card';
import CardHeader from '@material-tailwind/react/CardHeader';
import CardBody from '@material-tailwind/react/CardBody';
import Atom from '../assets/img/cosmos.png'
import SendIbcToken from './SendIbcToken'

export default function CardTable() {
    return (
        <Card>
            <CardHeader color="purple" contentPosition="left">
                <h2 className="text-white text-2xl">IBC TOKEN</h2>
            </CardHeader>
            <CardBody>
                <SendIbcToken />
            </CardBody>
        </Card>
    );
}
