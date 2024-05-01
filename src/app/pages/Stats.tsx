import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";
  import Image from "next/image";
  
  import React from "react";
  
  const stats = () => {
    return (
      <main style={{backgroundColor: "#FAF7F7"}}>
      
        <div className="flex flex-col justify-center grid md:grid-cols-2 lg:grid-cols-2 gap-4" >
          <Card className="border-none" style={{backgroundColor: "#FAF7F7"}}>
            <CardHeader className="flex flex-row items-center">
              <CardTitle className="text-sm font-medium font-montserrat text-base font-semibold leading-6 text-left">
                <div style={{ color: "red" }}>STATISTIC</div>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="font-montserrat text-4xl font-bold leading-10 text-left">
                Every project meets the <br />
                <span style={{ color: "#7374C5" }}>highest standards</span> of
                <br />
                quality and craftsmanship.
              </div>
            </CardContent>
          </Card>
  
          <Card className="border-none" style={{backgroundColor: "#FAF7F7"}}>
            <CardContent className="text-justify">
              <div className="font-cabin text-base font-normal leading-[32px] text-justify py-9" style={{color:"#666666"}}>
                We prioritize precision, efficiency, and reliability. With
                cutting-edge technology and seasoned professionals, we bring your
                vision to life with exceptional quality and craftsmanship. From
                eye-catching marketing materials to sustainable building
                solutions, we deliver on time and within budget.
              </div>
            </CardContent>
          </Card>
  
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card className="border-none" style={{backgroundColor: "#FAF7F7"}}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium" >
                Years of Experience
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-6xl font-bold" style={{ color: "#7374C5" }}>15+</div>
            </CardContent>
          </Card>
          <Card className="border-none" style={{backgroundColor: "#FAF7F7"}}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Completed Projects
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-6xl font-bold" style={{ color: "#7374C5" }}>442+</div>
            </CardContent>
          </Card>
          <Card className="border-none" style={{backgroundColor: "#FAF7F7"}}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Diverse Products
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-6xl font-bold" style={{ color: "#7374C5" }}>50+</div>
            </CardContent>
          </Card>
          <Card className="border-none"style={{backgroundColor: "#FAF7F7"}}     >
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Satisfaction Rate
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-6xl font-bold" style={{ color: "#7374C5" }}>98%</div>
            </CardContent>
          </Card>
        </div>
      </main>
    );
  };
  
  export default stats;
  