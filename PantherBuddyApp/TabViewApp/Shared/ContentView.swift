//
//  ContentView.swift
//  Shared
//
//  Created by Aidan Lewis-Grenz on 4/12/22.
//

import SwiftUI
//App Page View
struct ContentView: View {
    @State private var magnification: CGFloat = 1.0
    @State private var selection = 1
    //@Binding var showAddNewTodoView: Bool
    //@State private var name: String = ""
    //@State private var selectedCategory = 0
    //var categoryTypes = ["family","personal","work"]
    //@Binding var todos: [Todo]
    
    //list of items in ToDo tab
    @State private var todos = [
            Todo(name:"Meditate", discription: "Use The Meditation App And Relax Your Self"),
            Todo(name:"Get HomeWork Done", discription: "I have Assignment 3 for math and i have a essay to write"),
            Todo(name:"Eat", discription: "don't forget to eat, whether that be a meal or a snack. Also hydrate!"),
            Todo(name:"Set Alarm", discription: "Set an alarm on your phone so you can wake up tommorow for class"),
            Todo(name:"Get Some Sleep!", discription: "get some sleep so you dont fall asleep in class")
        ]
    //list of Items in Let's Talk Tab
    @State private var chats = [
            Chat(person:"Miles"),
            Chat(person:"Annonymous"),
            Chat(person:"Kevin"),
            Chat(person:"Fay"),
            Chat(person:"Annonymous")
        ]
    //list of items in Profile/customization tab
    @State private var Profile = [
            Option(option:"User Information"),
            Option(option:"Color Customizaation"),
            Option(option:"Kevin"),
            Option(option:"Fay"),
            Option(option:"Annonymous")
        ]
    //content in the app view
    var body: some View{
        let magnificationGesture =
        MagnificationGesture(minimumScaleDelta: 0)
            .onChanged({ value in
                self.magnification = value })
            .onEnded({ _ in
                print("Gesture Ended") })
        //creates the tab view
    TabView(selection: $selection) {
        //tab view "ToDo"
        NavigationView{
            //list of items
            List{
                //Shows through each item in list using there id(name)
                ForEach(todos, id:\.name){ (todo) in
                    //creates a link to the information in the Hstack using the Vstack as a front
                    NavigationLink(destination:
                        //what the link displays
                        VStack{
                            Text(todo.name)
                            .scaleEffect(magnification)
                            .gesture(magnificationGesture)
                        Spacer()
                            Text(todo.discription)
                            .scaleEffect(magnification)
                            .gesture(magnificationGesture)
                        Spacer()
                        }
                    ){
                        //what the link displays
                        HStack{
                            Text(todo.name)
                        }
                    }
                }
            }.navigationBarTitle("Todo Items")
            .navigationBarItems(
//                leading: Button("Add"){
//                    self.$showAddNewTodoView.toggle()
//                }.sheet(isPresented: $showAddNewTodoView){
//                    AddNewTodoView(showAddTodoView: self.$showAddNewTodoView, todos:self.$todos) )
//                },
                trailing: EditButton()
            )
        }
            .tabItem {
                Image(systemName: "1.circle")
                Text("ToDo")
                
            }.tag(1)
        //tab view "Let's Talk"
        NavigationView{
            //list of items
            List{
                //Shows through each item in list using there id(person)
                ForEach(chats, id:\.person){ (chat) in
                    NavigationLink(destination:
                        VStack{
                            Text(chat.person)
                            .scaleEffect(magnification)
                            .gesture(magnificationGesture)
                        }
                    ){
                        HStack{
                            Text(chat.person)
                        }
                    }
                }
                .onDelete(perform: { indexSet in
                                    todos.remove(atOffsets: indexSet)
                                })
                .onMove(perform: { indices, newOffset in
                                    todos.move(fromOffsets: indices, toOffset: newOffset)
                                })
            }.navigationBarTitle("Chats")
            .navigationBarItems(trailing: EditButton())
        }
            .tabItem {
                Image(systemName: "2.circle")
                Text("Lets Talk")
            }.tag(2)
        //tab three
        NavigationView{
            //list of items
            List{
                //Shows through each item in list using there id(person)
                ForEach(Profile, id:\.option){ (prof) in
                    NavigationLink(destination:
                        VStack{
                            Text(prof.option).scaleEffect(magnification)
                                .gesture(magnificationGesture)
                        }
                    ){
                        HStack{
                            Text(prof.option)
                        }
                    }
                }
                .onDelete(perform: { indexSet in
                                    todos.remove(atOffsets: indexSet)
                                })
                .onMove(perform: { indices, newOffset in
                                    todos.move(fromOffsets: indices, toOffset: newOffset)
                                })
            }.navigationBarTitle("Profile")
            .navigationBarItems(trailing: EditButton())
        }
            .tabItem {
                Image(systemName: "3.circle")
                Text("Profile/customization")
            }.tag(3)
        //tab four
        Circle()
            .fill(Color.black)
            .scaleEffect(magnification)
            .gesture(magnificationGesture)
            .frame(width: 200, height: 200)
            .tabItem {
                Image(systemName: "4.circle")
                Text("Resorces")
            }.tag(4)
    }.font(.largeTitle)
    }
}
struct Todo: Identifiable{
    let id = UUID()
    let name: String
    let discription: String
}
struct Chat {
    let person: String
}
struct Option {
    let option: String
    //let category: String
}

struct ContentView_Previews: PreviewProvider {
    static var previews: some View {
        ContentView()
    }
}
