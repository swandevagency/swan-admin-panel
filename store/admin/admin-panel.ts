import adminPanelUsecase from "~/use case/admin/adminPanelUsecase";
import { MutationTree, ActionTree } from "vuex";
export const state = () => ({});
export type RootState = ReturnType<typeof state>;
export const mutations: MutationTree<RootState> = {};
export const actions: ActionTree<RootState, RootState> = {};
