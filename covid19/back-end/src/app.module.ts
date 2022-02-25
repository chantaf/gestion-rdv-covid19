import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { AdminsModule } from './admin/admin.module';
import { VaccinsModule } from './vaccin/vaccin.module';
import { ContactsModule } from './contact/contacts.module';
import { ResponsablesModule } from './authentification/authentificationresponsable/authresponsables.module';
@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/covid19'), UsersModule],
  controllers: [AppController],
  providers: [AppService],
})

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/covid19'),AdminsModule ],
  controllers: [AppController],
  providers: [AppService],
})

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/covid19'),VaccinsModule ],
  controllers: [AppController],
  providers: [AppService],
})


@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/covid19'), ContactsModule],
  controllers: [AppController],
  providers: [AppService],
})

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/covid19'), ResponsablesModule],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {}
