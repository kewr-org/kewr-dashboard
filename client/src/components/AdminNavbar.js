import { useLocation } from 'react-router-dom';
import Button from '@material-tailwind/react/Button';
import Icon from '@material-tailwind/react/Icon';
import { useState } from 'react';
import Keplr from '../assets/img/keplr.png';
import Metamask from '../assets/img/metamask.png';

export default function AdminNavbar({ showSidebar, setShowSidebar }) {
    const location = useLocation().pathname;
    const [address, setAddress] = useState('');

  //  keplr
 async function handleClick(chain) {
  const chainId = chain ? chain : 'cosmoshub-1'
  await window.keplr.enable(chainId)
  const offlineSigner = window.getOfflineSigner(chainId);
  const accounts = await offlineSigner.getAccounts();
  setAddress(accounts[0].address)
 }
// akhir keplr

//  Metamask 

const [walletAdress, setWalletAdress] = useState()
    async function connectMetamask() {
        console.log("req akun")

        if(window.ethereum) {
            console.log("terdetek metamask")

            try {
               const accounts = await window.ethereum.request({
                method: "eth_requestAccounts"
               });
               setWalletAdress(accounts)
            }catch(error){
                console.log("error tidak connect")
            }
        }else{
            console.log("tidak terdeteksi metamask")
        }
    }

    return (
        <nav className="bg-gray-800 md:ml-64 py-6 px-3">
            <div className="container max-w-full mx-auto flex items-center justify-between md:pr-8 md:pl-10">
                <div className="md:hidden">
                    <Button
                        color="transparent"
                        buttonType="link"
                        size="lg"
                        iconOnly
                        rounded
                        ripple="light"
                        onClick={() => setShowSidebar('left-0')}
                    >
                        <Icon name="menu" size="2xl" color="white" />
                    </Button>
                    <div
                        className={`absolute top-2 md:hidden ${
                            showSidebar === 'left-0' ? 'left-64' : '-left-64'
                        } z-50 transition-all duration-300`}
                    >
                        <Button
                            color="transparent"
                            buttonType="link"
                            size="lg"
                            iconOnly
                            rounded
                            ripple="light"
                            onClick={() => setShowSidebar('-left-64')}
                        >
                            <Icon name="close" size="2xl" color="white" />
                        </Button>
                    </div>
                </div>

                <div className="flex justify-between items-center w-full">
                <div className='flex border border-white'>
                <img src={Metamask} width="40"/>
                <button onClick={connectMetamask} className="bg-transparent hover:bg-white text-white font-semibold hover:text-black py-2 px-4 hover:border-transparent rounded">
                        <strong>{walletAdress ? walletAdress : "Connect Metamask"}</strong>   
                        </button>
                </div>
                    <div className="flex border border-white">
                    <img src={Keplr} width="40"/>   
                     <button onClick={() => handleClick('cosmoshub-1')} className="bg-transparent hover:bg-white text-white font-semibold hover:text-black py-2 px-4 hover:border-transparent rounded">
                     <strong>{address ? address : 'Connect Keplr'}</strong>
                     </button>
                    </div>
                </div>
            </div>
        </nav>
    );
}
