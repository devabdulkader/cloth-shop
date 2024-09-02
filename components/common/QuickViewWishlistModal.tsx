import React from 'react'
interface QuickViewWishlistModalProps {
    onClose: () => void;
}

const QuickViewWishlistModal: React.FC<QuickViewWishlistModalProps> = ({ onClose }) => {
    return (
        <>
            <div className="fixed top-0 left-0 w-screen h-screen z-50 bg-black/60 backdrop-blur-sm">
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[420px] sm:max-w-[600px] lg:max-w-[984px] p-4 max-h-[90vh] overflow-auto">
                    <div className="bg-white shadow-md dark:bg-[#12141D] rounded-2xl sm:grid sm:grid-cols-[2fr_1fr] overflow-hidden">
                        dfslkdjflask

                        <div onClick={onClose} className=' text-white'>delete</div>
                    </div>
                </div></div>
        </>

    )
}

export default QuickViewWishlistModal