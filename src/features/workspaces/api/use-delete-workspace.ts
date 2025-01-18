import { useMutation, useQueryClient } from "@tanstack/react-query";
import { InferRequestType, InferResponseType } from "hono";

import { client } from "@/lib/rpc";
import { toast } from "sonner";

type ResponseType = InferResponseType<
	(typeof client.api.workspaces)[":workspaceId"]["$delete"],
	200
>;
type RequestType = InferRequestType<
	(typeof client.api.workspaces)[":workspaceId"]["$delete"]
>;

export const useDeleteteWorkspace = () => {
	const queryClient = useQueryClient();

	const mutation = useMutation<ResponseType, Error, RequestType>({
		mutationFn: async ({ param }) => {
			const response = await client.api.workspaces[":workspaceId"]["$delete"]({
				param,
			});

			if (!response.ok) {
				throw new Error("Failed to delete workspace");
			}

			return await response.json();
		},
		onSuccess: ({ data }) => {
			toast.success("Workspace Deleted");
			queryClient.invalidateQueries({ queryKey: ["workspaces"] });
			queryClient.invalidateQueries({ queryKey: ["workspace", data.$id] });
		},
		onError: () => {
			toast.error("Failed to create workspace");
		},
	});

	return mutation;
};
