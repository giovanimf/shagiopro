import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Payment, columns } from "./columns";
import { DataTable } from "./data-table";

async function getData(): Promise<Payment[]> {
    return [
        {
            id: "728ed52f",
            amount: 100,
            status: "pending",
            email: "m@example.com",
        },
        {
            id: "a1b2c3d4",
            amount: 250,
            status: "success",
            email: "ana.silva@example.com",
        },
        {
            id: "e5f6g7h8",
            amount: 75,
            status: "failed",
            email: "carlos_123@example.com",
        },
        {
            id: "i9j0k1l2",
            amount: 320,
            status: "pending",
            email: "juliana@example.com",
        },
        {
            id: "m3n4o5p6",
            amount: 50,
            status: "success",
            email: "rogerio@example.com",
        },
        {
            id: "q7r8s9t0",
            amount: 120,
            status: "success",
            email: "marina_oliveira@example.com",
        },
        {
            id: "u1v2w3x4",
            amount: 400,
            status: "failed",
            email: "fernando@example.com",
        },
        {
            id: "y5z6a7b8",
            amount: 220,
            status: "pending",
            email: "luana@example.com",
        },
        {
            id: "c9d0e1f2",
            amount: 180,
            status: "success",
            email: "pedro.santos@example.com",
        },
        {
            id: "g3h4i5j6",
            amount: 90,
            status: "pending",
            email: "isabela@example.com",
        },
        {
            id: "k7l8m9n0",
            amount: 300,
            status: "success",
            email: "thomas@example.com",
        },
        {
            id: "p1q2r3s4",
            amount: 110,
            status: "pending",
            email: "aline.gomes@example.com",
        },
        {
            id: "t5u6v7w8",
            amount: 60,
            status: "success",
            email: "diego_lima@example.com",
        },
        {
            id: "x9y0z1a2",
            amount: 130,
            status: "failed",
            email: "bruna_f@example.com",
        },
        {
            id: "b3c4d5e6",
            amount: 210,
            status: "pending",
            email: "rafael@example.com",
        },
        {
            id: "f7g8h9i0",
            amount: 95,
            status: "success",
            email: "sofia@example.com",
        },
        {
            id: "j1k2l3m4",
            amount: 175,
            status: "failed",
            email: "marcos@example.com",
        },
        {
            id: "n5o6p7q8",
            amount: 140,
            status: "success",
            email: "ana_lopes@example.com",
        },
        {
            id: "r9s0t1u2",
            amount: 80,
            status: "pending",
            email: "fernanda@example.com",
        },
        {
            id: "v3w4x5y6",
            amount: 230,
            status: "success",
            email: "gustavo@example.com",
        },
        {
            id: "z7a8b9c0",
            amount: 65,
            status: "pending",
            email: "livia@example.com",
        },
        {
            id: "d1e2f3g4",
            amount: 190,
            status: "failed",
            email: "joao@example.com",
        },
        {
            id: "h5i6j7k8",
            amount: 150,
            status: "success",
            email: "renata@example.com",
        },
        {
            id: "l9m0n1o2",
            amount: 100,
            status: "pending",
            email: "paulo@example.com",
        },
        {
            id: "p3q4r5s6",
            amount: 280,
            status: "success",
            email: "carolina@example.com",
        },
        {
            id: "t7u8v9w0",
            amount: 70,
            status: "failed",
            email: "fabio@example.com",
        },
        {
            id: "x1y2z3a4",
            amount: 160,
            status: "pending",
            email: "mariana@example.com",
        },
        {
            id: "b5c6d7e8",
            amount: 125,
            status: "success",
            email: "lucas@example.com",
        },
        {
            id: "f9g0h1i2",
            amount: 200,
            status: "failed",
            email: "amanda@example.com",
        },
        {
            id: "j3k4l5m6",
            amount: 90,
            status: "success",
            email: "rafaela@example.com",
        }
    ];
}

export default async function DataTableDemon() {
    const data = await getData()
    return (
        <Card className="p-4">
            <CardHeader className="p-0">
                <CardTitle>Data Table</CardTitle>
                <CardDescription>A data table featuring pagination, search, and sorting capabilities.</CardDescription>
            </CardHeader>
            <DataTable columns={columns} data={data} />
        </Card>
    )
}
