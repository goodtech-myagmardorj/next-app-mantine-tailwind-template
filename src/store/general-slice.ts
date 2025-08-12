import { createSlice } from "@reduxjs/toolkit";
import type { IGeneral } from "@/interfaces/general";

const initialState: IGeneral = {
  categories: [],
  statuses: [
    {
      value: "ACTIVE",
      label: "Идэвхтэй",
    },
    {
      value: "INACTIVE",
      label: "Идэвхгүй",
    },
    {
      value: "PENDING",
      label: "Хүлээгдэж буй",
    },
    {
      value: "SUSPENDED",
      label: "Түр түдгэлзүүлсэн",
    },
    {
      value: "BLOCKED",
      label: "Блоклогдсон",
    },
    {
      value: "DELETED",
      label: "Устгасан",
    },
    {
      value: "ARCHIVED",
      label: "Архивласан",
    },
    {
      value: "DRAFT",
      label: "Төслийн хувилбар",
    },
  ],
  roles: [
    {
      value: "ADMIN",
      label: "Админ",
    },
    {
      value: "USER",
      label: "Хэрэглэгч",
    },
    {
      value: "MODERATOR",
      label: "Зохицуулагч",
    },
    {
      value: "QUEST",
      label: "Зочин",
    },
    {
      value: "EDITOR",
      label: "Редактор",
    },
    {
      value: "VIEWER",
      label: "Харах эрхтэй",
    },
    {
      value: "CONTRIBUTOR",
      label: "Хувь нэмэр оруулагч",
    },
    {
      value: "SUPPORT",
      label: "Дэмжлэг үзүүлэгч",
    },
    {
      value: "ANALYST",
      label: "Аналитик",
    },
    {
      value: "DEVELOPER",
      label: "Хөгжүүлэгч",
    },
    {
      value: "MANAGER",
      label: "Менежер",
    },
    {
      value: "DESIGNER",
      label: "Дизайнер",
    },
    {
      value: "MARKETER",
      label: "Маркетер",
    },
  ],
};

const generalSlice = createSlice({
  name: "general",
  initialState,
  reducers: {
    setInit: (
      state,
      {
        payload,
      }: {
        payload: IGeneral;
      },
    ) => {
      const { categories } = payload;

      return {
        ...state,
        categories,
      };
    },
    reduceAddCategory: (
      state,
      {
        payload,
      }: {
        payload: IGeneral;
      },
    ) => {
      const { categories } = payload;

      return {
        ...state,
        categories,
      };
    },
  },
});

export const generalReducer = generalSlice.reducer;

export const { setInit, reduceAddCategory } = generalSlice.actions;
