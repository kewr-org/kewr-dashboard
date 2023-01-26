import Card from '@material-tailwind/react/Card';
import CardHeader from '@material-tailwind/react/CardHeader';
import CardBody from '@material-tailwind/react/CardBody';
import Atom from '../assets/img/cosmos.png'

export default function CardTable() {
    return (
        <Card>
            <CardHeader color="purple" contentPosition="left">
                <h2 className="text-white text-2xl">SWAP</h2>
            </CardHeader>
            <CardBody>
                <div className="overflow-x-auto">
                    <table className="items-center w-full bg-transparent border-collapse">
                        <tbody>
                            <div className="grid grid-cols-6 gap-4">
                                <div className="col-start-2 col-span-4 bg-blue-400">
                                    <div className='flex justify-between'>
                                        <div>From</div>
                                        <div>Balance :</div>
                                    </div>
                                </div>
                                <div className="col-start-1 col-end-3 bg-blue-400">
                                    <div className=''>1</div>
                                </div>
                                <div className="col-end-7 col-span-2 bg-blue-400">03</div>
                            </div>
                            <h1 className='text-center mt-4'>SWAP COMINGSOON</h1>
                        </tbody>
                    </table>
                </div>
            </CardBody>
        </Card>
    );
}
