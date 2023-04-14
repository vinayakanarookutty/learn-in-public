import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
} from '@chakra-ui/react'
import { Dispatch, SetStateAction } from 'react'

interface Props{
    open:boolean,
    setOpen: Dispatch<SetStateAction<boolean>>
    message:string
}
const Waring = (props:Props) => {
    const { open,setOpen } = props
    return (
        <div>  
            <Modal isOpen={open} onClose={() => setOpen(false)}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Warning</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    This app is currently in beta version and is not fully functional. Please use it at your own risk.
                </ModalBody>
                <ModalFooter>
                    <Button colorScheme='blue' mr={3} onClick={() => setOpen(false)}>
                        Close
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal></div>
    )
}

export default Waring