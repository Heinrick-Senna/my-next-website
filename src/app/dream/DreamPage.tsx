"use client"

import { SavingsJar } from "@/components/Saving-Jar";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Home } from "lucide-react";
import { useState } from "react";

const BRL = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
  maximumFractionDigits: 0,
})

export default function DreamPage() {
    const [goal, setGoal] = useState(350000)
    const [saved, setSaved] = useState(122500)

    const percent = goal > 0 ? Math.min(100, (saved / goal) * 100) : 0
    const remaining = Math.max(0, goal - saved)

    return <>
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-3">
            <span className="inline-flex items-center gap-2 rounded-full bg-accent px-4 py-1.5 text-sm font-medium text-accent-foreground">
                <Home className="size-4" aria-hidden="true" />
                Casa dos Sonhos
            </span>
            <h1 className="text-balance text-center text-3xl font-bold tracking-tight md:text-4xl">
                Pote de Economias
            </h1>
            <p className="max-w-md text-pretty text-center leading-relaxed text-muted-foreground">
                Acompanhe quanto você já guardou para a casa dos seus sonhos. O pote
                enche conforme você se aproxima da meta.
            </p>
        </div>

        <div className="mx-auto mt-10 grid max-w-3xl items-start gap-8 md:grid-cols-2">
            {/* Jar */}
            <Card className="flex flex-col items-center gap-4 p-6">
                <SavingsJar percent={percent} />
                <div className="text-center">
                    <p className="font-mono text-4xl font-bold text-primary">
                        {percent.toFixed(1)}%
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                        {BRL.format(saved)} de {BRL.format(goal)}
                    </p>
                </div>
            </Card>

            {/* Controls */}
            <Card className="flex flex-col gap-6 p-6">
                <div className="flex flex-col gap-2">
                    <Label htmlFor="goal">Meta (valor da casa)</Label>
                    <Input
                        id="goal"
                        type="number"
                        min={0}
                        inputMode="numeric"
                        value={goal}
                        onChange={(e) => setGoal(Math.max(0, Number(e.target.value) || 0))}
                    />
                </div>

                <div className="flex flex-col gap-2">
                    <Label htmlFor="saved">Valor economizado</Label>
                    <Input
                        id="saved"
                        type="number"
                        min={0}
                        inputMode="numeric"
                        value={saved}
                        onChange={(e) =>
                            setSaved(Math.max(0, Number(e.target.value) || 0))
                        }
                    />
                </div>

                <div className="flex flex-col gap-3">
                    <div className="flex items-center justify-between">
                        <Label htmlFor="percent">Porcentagem preenchida</Label>
                        <span className="font-mono text-sm font-medium text-primary">
                            {Math.round(percent)}%
                        </span>
                    </div>
                </div>

                <div className="mt-2 flex items-center justify-between rounded-lg bg-secondary px-4 py-3">
                    <span className="text-sm font-medium text-secondary-foreground">
                        Falta guardar
                    </span>
                    <span className="font-mono font-semibold text-secondary-foreground">
                        {BRL.format(remaining)}
                    </span>
                </div>
            </Card>
        </div>
    </>;
}
