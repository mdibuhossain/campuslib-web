import { useMutation, useQuery } from "@apollo/client";
import { CircularProgress, LinearProgress, Typography } from "@mui/material";
import { useAuth } from "../../Hooks/useAuth";
import PageLayout from "../../Layout/PageLayout";
import { GET_USERS, MAKE_ADMIN } from "../../queries/query";

const MakeAdmin = () => {
    const { user, token } = useAuth();

    const updateAdmin = (arg, comp) => {
        const res = [...arg];
        const indx = res.findIndex((tmp) => tmp?._id === comp?._id);
        res[indx] = {
            ...res[indx],
            role: res[indx].role === "admin" ? "regular" : "admin",
        };
        return res;
    };

    const { data: { getUsers: users = [] } = {}, loading: usersLoading } =
        useQuery(GET_USERS, { variables: { token } });

    const [handleMakeAdmin, { loading: adminLoading }] = useMutation(MAKE_ADMIN, {
        update(cache, { data: { makeAdmin } }) {
            const { getUsers } = cache.readQuery({
                query: GET_USERS,
                variables: { token },
            });
            cache.writeQuery({
                query: GET_USERS,
                variables: { token },
                data: {
                    getUsers: updateAdmin(getUsers, makeAdmin),
                },
            });
        },
    });

    return (
        <PageLayout>
            <Typography
                variant="h5"
                sx={{ fontWeight: 600, textAlign: "center", my: 4 }}
            >
                MAKE ADMIN
            </Typography>
            <div className="flex flex-col 2xl:w-6/12 xl:w-7/12 lg:w-8/12 md:w-9/12 w-11/12 mx-auto mt-10 mb-10 bg-white p-5 rounded-lg shadow-2xl">
                {adminLoading && <LinearProgress />}
                {usersLoading ? (
                    <div className=" flex justify-center items-center">
                        <CircularProgress color="info" />
                    </div>
                ) : (
                    users?.map((item) => (
                        <div
                            key={item?._id}
                            className="grid grid-cols-1 sm:grid-cols-3 m-2"
                        >
                            <div className="flex items-center col-span-2">
                                <div className="mr-2 w-12 hidden sm:block">
                                    <img
                                        src={item?.photoURL || "/assets/images/avator.webp"}
                                        className="rounded-full w-full"
                                        alt="Avatar"
                                    />
                                </div>
                                <div className="flex flex-col justify-start w-full">
                                    <h5 className="text-sm font-medium leading-tight mr-2">
                                        {item?.email}
                                    </h5>
                                    <p className="text-xs text-gray-500">
                                        {item?.displayName} {user.email === item?.email && "( me )"}{" "}
                                        (by-{item?.authType})
                                    </p>
                                </div>
                            </div>
                            <div className="sm:grid sm:justify-self-end sm:mt-0 mt-1 content-center">
                                {item?.role === "admin" ? (
                                    <button
                                        onClick={() =>
                                            handleMakeAdmin({ variables: { _id: item?._id, token } })
                                        }
                                        className="bg-red-600 hover:bg-red-900 rounded-md px-2 py-1 font-semibold text-gray-50 text-xs"
                                    >
                                        Admin
                                    </button>
                                ) : (
                                    <button
                                        onClick={() =>
                                            handleMakeAdmin({ variables: { _id: item?._id, token } })
                                        }
                                        className="bg-green-500 hover:bg-green-600 rounded-md px-2 py-1 font-semibold text-gray-800 hover:text-gray-200 text-xs"
                                    >
                                        Make Admin
                                    </button>
                                )}
                            </div>
                        </div>
                    ))
                )}
            </div>
        </PageLayout>
    );
};

export default MakeAdmin;
