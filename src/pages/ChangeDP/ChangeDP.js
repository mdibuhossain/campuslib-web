import { LoadingButton } from '@mui/lab';
import { TextField, Typography } from '@mui/material';
import { Stack } from '@mui/system';
import React from 'react';
import AvatarEditor from 'react-avatar-editor';
import { useAuth } from '../../Hooks/useAuth';
import PageLayout from '../../Layout/PageLayout';

const ChangeDP = () => {
    const { user, isLoading, uploadAvatar, updateProfileSettings, updateProfileLoading } = useAuth();
    const [selectedImg, setSelectedImg] = React.useState(null);
    const [showModal, setShowModal] = React.useState(false);
    const [scale, setScale] = React.useState(1);
    const [rotate, setRotate] = React.useState(0);
    const [updateData, setUpdateData] = React.useState({ displayName: user?.displayName });
    const EditorRef = React.useRef(null);

    const updateHandler = (e) => {
        const tmpData = updateData
        tmpData[e.target.name] = e.target.value
        setUpdateData(tmpData)
    }
    const handleModalClose = () => {
        setShowModal(false)
        setSelectedImg(null)
        setScale(1)
        setRotate(0)
    }
    const handleSelectImg = (e) => {
        const img = e.target.files[0]
        if (img !== null) {
            setSelectedImg(img)
            setShowModal(true)
        }
    }
    function handleWhileSelectImg(e) {
        e.target.value = null
    }

    const showCroppedImage = async () => {
        if (EditorRef.current) {
            const img = EditorRef.current.getImage().toDataURL();
            uploadAvatar(img);
            handleModalClose()
        }
    }

    return (
        <PageLayout>
            <div className="relative">
                <Typography variant='h5' sx={{ fontWeight: 600, textAlign: 'center', my: 4 }}>Profile settings</Typography>
                <div className="text-center flex justify-center items-center flex-col my-5">
                    <Stack spacing={2}>
                        <div className="flex justify-center">
                            <dir className="relative p-0">
                                {(isLoading || updateProfileLoading) ?
                                    <div class="flex items-center justify-center space-x-2 animate-pulse">
                                        <div class="w-40 h-40 bg-gray-400 rounded-full"></div>
                                    </div> :
                                    <>
                                        <img className="w-40 rounded-full" src={user.photoURL} alt="profile" />
                                        <div className="flex space-x-2 justify-center absolute right-0 bottom-4">
                                            <div>
                                                <label htmlFor='avatarSelect' className="flex rounded-full bg-gray-500 text-white leading-normal uppercase shadow-md hover:bg-gray-600 hover:shadow-lg focus:bg-gray-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-800 active:shadow-lg transition duration-150 ease-in-out w-9 h-9">
                                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="download"
                                                        className="w-5 mx-auto" role="img" xmlns="http://www.w3.org/2000/svg"
                                                        fill="currentColor" viewBox="0 0 16 16">
                                                        <path d="M10.5 8.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                                                        <path d="M2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2zm.5 2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm9 2.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0z" />
                                                    </svg>
                                                    <input onChange={handleSelectImg} onClick={handleWhileSelectImg} accept="image/*" type="file" id="avatarSelect" className="hidden" />
                                                </label>
                                            </div>
                                        </div>
                                    </>
                                }
                            </dir>
                        </div>
                        <TextField disabled label="Email" name="email" variant="outlined" value={user?.email} />
                        <TextField
                            label="Full Name"
                            name="displayName"
                            variant="outlined"
                            defaultValue={user?.displayName}
                            onChange={updateHandler}
                        />
                        <LoadingButton
                            loading={updateProfileLoading}
                            onClick={() => { updateData && updateProfileSettings(updateData) }}
                            variant="contained"
                        >
                            update
                        </LoadingButton>
                    </Stack>

                    {/* Modal Start */}
                    {showModal ? (
                        <>
                            <div
                                className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                            >
                                <div className="relative w-auto my-6 mx-auto max-w-sm">
                                    {/*content*/}
                                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                        {/*header*/}
                                        <div className="flex items-center justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                                            <h3 className="text-2xl font-semibold">
                                                Update Avatar
                                            </h3>
                                            <button
                                                className="p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                                onClick={handleModalClose}
                                            >
                                                <span className="grid content-center bg-transparent text-black opacity-30 h-6 w-6 outline-none focus:outline-none">
                                                    ×
                                                </span>
                                            </button>
                                        </div>
                                        {/*body*/}
                                        <AvatarEditor
                                            ref={EditorRef}
                                            image={selectedImg}
                                            width={250}
                                            height={250}
                                            border={35}
                                            borderRadius={200}
                                            rotate={rotate}
                                            scale={scale}
                                            color={[89, 72, 72, 0.8]}
                                        />
                                        <div className="mx-2">
                                            <div className="relative pt-1 flex">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM13 10H7" />
                                                </svg>
                                                <input
                                                    type="range"
                                                    className="form-range w-full h-6 mx-2 bg-transparent focus:outline-none focus:ring-0 focus:shadow-none"
                                                    min="1"
                                                    max="10"
                                                    defaultValue={1}
                                                    step="0.01"
                                                    id="customRange3"
                                                    onChange={(e) => setScale(Number(e.target.value))}
                                                />
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                                                </svg>
                                            </div>
                                            <div className="flex relative pt-1">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6" />
                                                </svg>
                                                <input
                                                    type="range"
                                                    className="form-range w-full h-6 mx-2 bg-transparent focus:outline-none focus:ring-0 focus:shadow-none"
                                                    min="0"
                                                    max="360"
                                                    defaultValue={0}
                                                    step="0.5"
                                                    id="customRange3"
                                                    onChange={(e) => setRotate(Number(e.target.value))}
                                                />
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ transform: 'scaleX(-1)' }}>
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6" />
                                                </svg>
                                            </div>
                                        </div>
                                        {/*footer*/}
                                        <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                                            <button
                                                className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                                type="button"
                                                onClick={handleModalClose}
                                            >
                                                Close
                                            </button>
                                            <button
                                                className="bg-emerald-500 text-gray-700 active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                                type="button"
                                                onClick={showCroppedImage}
                                            >
                                                Update
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                        </>
                    ) : null}
                    {/* Modal End */}

                </div >
            </div >
        </PageLayout>
    );
};

export default ChangeDP;