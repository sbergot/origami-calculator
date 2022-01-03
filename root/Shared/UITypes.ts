import React from "react";

export interface Children {
    children: React.ReactNode;
}

const dummy = () => React.useState<number>(0);
export type UseState = ReturnType<typeof dummy>;
